'use strict';
const apiBaseUrl = require('./apiBaseUrl').baseUrl;
var WAD_COLORS = [
    "rgb(173, 35, 35)", // Red
    "rgb(42, 75, 215)", // Blue
    "rgb(87, 87, 87)", // Dark Gray
    "rgb(29, 105, 20)", // Green
    "rgb(129, 74, 25)", // Brown
    "rgb(129, 38, 192)", // Purple
    "rgb(160, 160, 160)", // Lt Gray
    "rgb(129, 197, 122)", // Lt green
    "rgb(157, 175, 255)", // Lt blue
    "rgb(41, 208, 208)", // Cyan
    "rgb(255, 146, 51)", // Orange
    "rgb(199, 183, 0)", // Yellow
    "rgb(233, 222, 187)", // Tan
    "rgb(255, 205, 243)", // Pink
    // "rgb(255, 255, 255)", // White
    //"rgb(0, 0, 0)",       // Black
];
var isAbsolute = new RegExp('^([a-z]+://|//)', 'i');
var isDataOrBlob = new RegExp('^(data|blob):', 'i');

function prependApiBaseIfNeeded(url) {
    if(isAbsolute.test(url) || isDataOrBlob.test(url)) {
        return url; // already absolute
    } else {
        return apiBaseUrl + url; // turn relative into absolute
    }
}

function polygonToSvgPath(polygon, left, top) {
    // M 10,10 L 100,10 100,100 z    M 30,20 L 70,20 70,60 z
    var path_strings = [];
    for (var part of polygon) {

        if (part.length < 2) {
            continue;
        }

        path_strings.push('M');
        var first = true;
        for (var point of part) {
            path_strings.push((point[0]-left) + "," + (point[1]-top));
            if (isNaN(point[0]) || isNaN(point[1])) {
                console.log('not showing invalid polygon, found NaN');
                return "";
            }
            if (first) {
                path_strings.push('L');
                first = false;
            }
        }
        path_strings.push('z');
    }
    return path_strings.join(" ");
}

/*

Data structures basic info...

result
{
    output_url:
    output:
    id:
    err:
}


resultPageData
{
    result_data: {
        inputs:[
            {
                is_img: true,
                url: (relative or absolute)
            }
        ],
        visualizer_data: {
            list_key: 'Objects'
            label_key: 'Object'
        },
        scale_applied: 1.333
    }
}


annotatedResult - this is basically the merging of the 2 above
{   err:
    output_url:
    output:
    id:
    inputs:[
        {
            is_img: true,
            url: (relative or absolute)
        }
    ],
    visualizer_data: {
        list_key: 'Objects'
        label_key: 'Object'
    },
    scale_applied: 1.333
}


*/
// Take a result object from API call, and fetch additional data, and return the additional data merged in.
async function getAnnotatedResultFromResult(result) {
    if(result.err) {
        console.log('cannot get result page data for error result');
        return result;
    }
    var resultPageData = await fetch(apiBaseUrl + '/get_standard_api_result_data/' + result.id, {
        credentials: 'include'
    });
    resultPageData = await resultPageData.json();
    var result_data = resultPageData.result_data;

    // make merging of all the properties manually...
    return {
        err: result.err,
        output: result.output,
        output_url: result.output_url,
        id: result.id,
        inputs: result_data.inputs,
        visualizer_data: result_data.visualizer_data,
        scale_applied: result_data.scale_applied
    };
}
async function renderResultIntoElement(result, element) {
    console.log('getting result page data');
    var annotatedResult = await getAnnotatedResultFromResult(result);
    console.log('got result page data');
    return renderAnnotatedResultIntoElement(annotatedResult, element);
}

function renderAnnotatedResultIntoElement(annotatedResult, element) {
    element.innerHTML = ''; // remove everything to start
    if(annotatedResult.err) {
        element.innerHTML = err;
        return false;
    }
    if(annotatedResult.output) {
        // JSON or text output.
        console.log('got json or text output');
        if(typeof annotatedResult.output === 'string') {
            var scroller = document.createElement("div");
            scroller.style.width = '100%';
            scroller.style.height = '100%';
            scroller.style.overflow = 'auto';
            scroller.style.display = 'flex';
            scroller.style.alignItems = 'center';
            scroller.style.flexDirection = 'column';
            element.appendChild(scroller);
            var pre = document.createElement("pre");
            pre.textContent = annotatedResult.output;
            pre.style.whiteSpace = "pre-wrap";
            pre.style.margin = '0px';
            scroller.appendChild(pre);
            // Append inputs
            for(var input of annotatedResult.inputs) {
                if(input.is_img) {
                    var img_tag = document.createElement('img');
                    img_tag.src = prependApiBaseIfNeeded(input.url);
                    img_tag.style.position = 'relative';
                    img_tag.style.width = '100%';
                    img_tag.style.height = '100%%';
                    img_tag.style.objectFit = 'contain';
                    scroller.appendChild(img_tag);
                }
            }
            return true;
        } else if(typeof annotatedResult.output === 'object') {
            // If we uploaded an image, then we may be able to render the image with boxes on top
            if(annotatedResult.inputs.length == 1 &&
                annotatedResult.inputs[0].is_img &&
                annotatedResult.visualizer_data
            ) {
                // single image input and we know how to visualize it.
                console.log('have visualizer for result JSON');
                var resultscaler = document.createElement('iframe');
                // Set up a handler for when the frame loads - we need to handle this event
                resultscaler.onload = function() {
                    // Firefox doesnt allow inner iframe manip until the iframe is loaded...
                    var innerDoc = resultscaler.contentDocument.body;
                    innerDoc.style.margin = '0px';
                    innerDoc.style.overflow = 'hidden';

/*

                    var css = `
                        boundingbox:hover{
                            background-color: #00ff00
                        }
                    `;
                    var style = document.createElement('style');

                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }

                    resultscaler.contentDocument.head.appendChild(style);
*/



                    var bbox_container = document.createElement('boundingboxcontainer');
                    bbox_container.style.position = 'relative'; // the absolute positions are relative to this element
                    bbox_container.style.opacity = '0.001'; // the result are hidden until the iframe reflows - which is first when the img loads
                    innerDoc.appendChild(bbox_container);
                    var img_tag = document.createElement('img');
                    img_tag.src = prependApiBaseIfNeeded(annotatedResult.inputs[0].url);
                    img_tag.style.position = 'absolute';
                    bbox_container.appendChild(img_tag);
                    var iframe_reflow = function() {
                        console.log('iframe resize');
                        resultscaler.contentDocument.body.style.transform = null;
                        var bodyWidth = resultscaler.contentDocument.body.scrollWidth;
                        var bodyHeight = resultscaler.contentDocument.body.scrollHeight;
                        var imgWidth = img_tag.offsetWidth;
                        var imgHeight = img_tag.offsetHeight;
                        var containerWidth = resultscaler.offsetWidth;
                        var containerHeight = resultscaler.offsetHeight;
                        var wExcess = 0;
                        var hExcess = 0;
                        if(imgWidth < bodyWidth && imgHeight < bodyHeight) {
                            var wScale = containerWidth / imgWidth;
                            var hScale = containerHeight / imgHeight;
                            var minScale = Math.min(wScale, hScale);
                            wExcess = containerWidth - imgWidth * minScale;
                            hExcess = containerHeight - imgHeight * minScale;
                        } else {
                            var wScale = containerWidth / bodyWidth;
                            var hScale = containerHeight / bodyHeight;
                            var minScale = Math.min(wScale, hScale);
                            wExcess = containerWidth - bodyWidth * minScale;
                            hExcess = containerHeight - bodyHeight * minScale;
                        }
                        wExcess = wExcess / minScale;
                        hExcess = hExcess / minScale;
                        resultscaler.contentDocument.body.style.transformOrigin = 'top left';

                        resultscaler.contentDocument.body.style.transform = 'scale(' + minScale + ')';
                        bbox_container.style.setProperty('--scaleapplied', minScale);
                        bbox_container.style.setProperty('--fontscale', (100 / minScale) + "%");

                        bbox_container.style.left = (wExcess / 2) + "px";
                        bbox_container.style.top = (hExcess / 2) + "px";
                        bbox_container.style.opacity = '1';
                    };
                    resultscaler.contentWindow.onresize = iframe_reflow;
                    img_tag.onload = iframe_reflow;
                    var processed_annotations = process_annotations(annotatedResult.output, annotatedResult.visualizer_data, annotatedResult.scale_applied);
                    console.log('processed annotations', processed_annotations);
                    var i = 0;
                    for(var annotation of processed_annotations) {
                        var bbox = document.createElement('boundingbox');
                        bbox.style.position = 'absolute';

                        var left;
                        var top;
                        var width;
                        var height;
                        var color = WAD_COLORS[i++ % WAD_COLORS.length];

                        if(annotation.mask_vertices){
                            var minx = null;
                            var miny = null;
                            var maxx = null;
                            var maxy = null;

                            for(var part of annotation.mask_vertices){
                                for(var point of part){
                                    var x = point[0];
                                    var y = point[1];

                                    if(minx === null || x < minx){
                                        minx = x;
                                    }
                                    if(miny === null || y < miny){
                                        miny = y;
                                    }
                                    if(maxx === null || x > maxx){
                                        maxx = x;
                                    }
                                    if(maxy === null || y > maxy){
                                        maxy = y;
                                    }
                                }
                            }

                            width = maxx - minx;
                            height = maxy - miny;

                            left = minx;
                            top = miny;

                            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                            svg.style.position = 'absolute';
                            svg.style.overflow = 'visible';
                            svg.style.width = width + 'px';
                            svg.style.height = height + 'px';

                            var path = document.createElementNS('http://www.w3.org/2000/svg',"path");
                            path.setAttributeNS(null, "d", polygonToSvgPath(annotation.mask_vertices, left, top));
                            path.style.fill = 'none';
                            path.style.stroke = color;
                            path.style.strokeWidth = 'calc(2px / var(--scaleapplied))'; // 2px at all scale levels


                            svg.appendChild(path);
                            bbox.appendChild(svg);

                            bbox.style.border = 'none';
                        }else if(annotation.bounding_box){
                            left = annotation.bounding_box[0];
                            top = annotation.bounding_box[1];
                            width = annotation.bounding_box[2];
                            height = annotation.bounding_box[3];

                            bbox.style.border = 'calc(2px / var(--scaleapplied)) solid ' + color;
                        }else {
                            throw new Exception('Neither mask_vertices or bounding_box is passed, unknown annotation format');
                        }


                        bbox.style.left = left + 'px';
                        bbox.style.top = top + 'px';
                        bbox.style.width = width + 'px';
                        bbox.style.height = height + 'px';



                        bbox_container.appendChild(bbox);
                        var bbox_label = document.createElement('boundingboxlabel');
                        bbox_label.textContent = annotation.caption;
                        bbox_label.style.color = 'white';
                        bbox_label.style.fontFamily = 'arial';
                        bbox_label.style.backgroundColor = color;
                        bbox_label.style.fontSize = 'var(--fontscale)';
                        bbox_label.style.position = 'absolute';
                        bbox.appendChild(bbox_label);
                    }
                }
                // Set the src which will end up triggering the onload event in all browsers.
                resultscaler.src = 'about:blank';
                resultscaler.style.border = 'none';
                resultscaler.style.width = '100%';
                resultscaler.style.height = '100%';
                element.appendChild(resultscaler);
                return true;
            } else {
                // not single image - perhaps multi image or text input.
                // or no visualizer
                console.log('no visualizer for result JSON');
                var scroller = document.createElement("div");
                scroller.style.width = '100%';
                scroller.style.height = '100%';
                scroller.style.overflow = 'auto';
                scroller.style.display = 'flex';
                scroller.style.alignItems = 'center';
                scroller.style.flexDirection = 'column';
                element.appendChild(scroller);
                var pre = document.createElement("pre");
                pre.style.margin = '0px';
                pre.textContent = JSON.stringify(annotatedResult.output, null, 4);
                scroller.appendChild(pre);
                // Append inputs
                for(var input of annotatedResult.inputs) {
                    if(input.is_img) {
                        var img_tag = document.createElement('img');
                        img_tag.src = prependApiBaseIfNeeded(input.url);
                        img_tag.style.width = '100%';
                        img_tag.style.height = '79%';
                        img_tag.style.objectFit = 'contain';
                        scroller.appendChild(img_tag);
                    }
                }
                return true;
                // We got JSON output for a multi image or text input ... don't bother showing the input right now
            }
        } else {
            element.innerHTML = "Model returned an unknown data type.";
            return false;
        }
    } else if(annotatedResult.output_url) {
        // Image output.
        console.log('got image output');
        // Just show the image.
        var img_tag = document.createElement('img');
        img_tag.src = annotatedResult.output_url;
        img_tag.style.position = 'relative';
        img_tag.style.width = '100%';
        img_tag.style.height = '100%';
        img_tag.style.objectFit = 'contain';
        element.appendChild(img_tag);
        return true;
    } else {
        element.innerHTML = "Model did not return an output or an error.";
        return false;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function process_annotations(input_struct, visualizer_data, scale_applied) {
    input_struct = JSON.parse(JSON.stringify(input_struct)); // cheap deep clone
    var detections = input_struct[visualizer_data.list_key];
    detections.sort(function(a, b) {
        return b.confidence - a.confidence;
    });
    var count = detections.length;
    var processed_annotations = [];
    for(var i = 0; i < count; i++) {
        var detection = detections[i];
        var caption;
        if(visualizer_data.label_key == 'demographic') {
            if(detection[visualizer_data.label_key]) {
                caption = detection[visualizer_data.label_key]; // backwards compatible demog format
            } else {
                //"White Male, 30-40"
                caption = detection['cultural_appearance'] + ' ' + detection['gender'] + ', ' + detection['age_range'][0] + '-' + detection['age_range'][1]
            }
        } else if(visualizer_data.label_key == 'people') {
            //produces "Sad, White Male, 30-40, Ted Cruz"
            var parts = [];
            if(detection['facial-expression-recognition'] && detection['facial-expression-recognition']['emotion'] != null) {
                parts.push(capitalizeFirstLetter(detection['facial-expression-recognition']['emotion']));
            }
            if(detection['demographic-recognition'] && detection['demographic-recognition']['cultural_appearance'] != null) {
                parts.push(detection['demographic-recognition']['cultural_appearance'] + ' ' + detection['demographic-recognition']['gender'] + ', ' + detection['demographic-recognition']['age_range'][0] + '-' + detection['demographic-recognition']['age_range'][1]);
            }
            if(detection['celebrity-recognition'] && detection['celebrity-recognition']['name'] != null && detection['celebrity-recognition']['name'] != 'unknown') {
                parts.push(toTitleCase(detection['celebrity-recognition']['name']));
            }
            if(parts.length > 0) {
                caption = parts.join(', ');
            } else {
                caption = "Face";
            }
        } else if(visualizer_data.label_key == 'pose') {
            const named_segments = [
                [
                    "nose",
                    "right_eye"
                ],
                [
                    "nose",
                    "left_eye"
                ],
                [
                    "right_eye",
                    "right_ear"
                ],
                [
                    "left_eye",
                    "left_ear"
                ],
                [
                    "right_shoulder",
                    "right_elbow"
                ],
                [
                    "left_shoulder",
                    "left_elbow"
                ],
                [
                    "right_elbow",
                    "right_hand"
                ],
                [
                    "left_elbow",
                    "left_hand"
                ],
                [
                    "right_hip",
                    "right_knee"
                ],
                [
                    "left_hip",
                    "left_knee"
                ],
                [
                    "right_knee",
                    "right_foot"
                ],
                [
                    "left_knee",
                    "left_foot"
                ]
            ];
            caption = ''; // no caption for pose parts

            var mask_vertices = [];
            for(var pair of named_segments){
                var p1 = detection[visualizer_data.label_key][pair[0]];
                var p2 = detection[visualizer_data.label_key][pair[1]];

                if(p1 && p2){
                    p1 = JSON.parse(JSON.stringify(p1)); // cheap deep clone
                    p2 = JSON.parse(JSON.stringify(p2)); // cheap deep clone
// Do not rescale here - let the mask rescale handle this
//                    p1[0] *= scale_applied;
//                    p1[1] *= scale_applied;
//                    p2[0] *= scale_applied;
//                    p2[1] *= scale_applied;
                    var polygon_part = [p1, p2];
                    mask_vertices.push(polygon_part);
                }
            }
            detection.mask_vertices = mask_vertices;

        } else {
            caption = detection[visualizer_data.label_key]; // non demographic mode
            if(caption && caption.constructor === String)
            {
                 //It's a string
            }else{
                // some other type of object
                var keys = Object.keys(caption);
                if(keys.length == 1){
                    caption = caption[keys[0]]; // get the only property
                }else{
                    caption = JSON.stringify(caption);
                }
            }

        }

        if (detection.bounding_box){
            detection.bounding_box[0] *= scale_applied;
            detection.bounding_box[1] *= scale_applied;
            detection.bounding_box[2] *= scale_applied;
            detection.bounding_box[3] *= scale_applied;
        }

        // Note: this also handles pose results!
        if (detection.mask_vertices){
            for(var part of detection.mask_vertices){
                for(var point of part){
                    point[0] *= scale_applied;
                    point[1] *= scale_applied;
                }
            }
        }
        processed_annotations.push({
            bounding_box: detection.bounding_box,
            mask_vertices: detection.mask_vertices,
            caption: caption
        });
    }
    return processed_annotations;
}

module.exports = {
    renderResultIntoElement: renderResultIntoElement,
    renderAnnotatedResultIntoElement: renderAnnotatedResultIntoElement
};

export type Input = string | string[] | Buffer

// #region Preset
// https://github.com/tesseract-ocr/tesseract/tree/master/tessdata/configs
// https://github.com/tesseract-ocr/tesseract/tree/master/tessdata/tessconfigs
export type Preset =
  | "alto"
  | "ambigs.train"
  | "api_config"
  | "bazaar"
  | "bigram"
  | "box.train"
  | "box.train.stderr"
  | "digits"
  | "get.images"
  | "hocr"
  | "inter"
  | "kannada"
  | "linebox"
  | "logfile"
  | "lstm.train"
  | "lstmbox"
  | "lstmdebug"
  | "makebox"
  | "pdf"
  | "quiet"
  | "rebox"
  | "strokewidth"
  | "tsv"
  | "txt"
  | "unlv"
  | "wordstrbox"
  | "batch"
  | "batch.nochop"
  | "matdemo"
  | "msdemo"
  | "nobatch"
  | "segdemo"
// #endregion

// #region Language
// https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc#LANGUAGES
// https://github.com/tesseract-ocr/tessdoc/blob/master/Data-Files-in-different-versions.md
export type Language =
  | "afr"
  | "amh"
  | "ara"
  | "asm"
  | "aze"
  | "aze_cyrl"
  | "bel"
  | "ben"
  | "bod"
  | "bos"
  | "bre"
  | "bul"
  | "cat"
  | "ceb"
  | "ces"
  | "chi_sim"
  | "chi_tra"
  | "chr"
  | "cos"
  | "cym"
  | "dan"
  | "deu"
  | "div"
  | "dzo"
  | "ell"
  | "eng"
  | "enm"
  | "epo"
  | "equ"
  | "est"
  | "eus"
  | "fas"
  | "fao"
  | "fil"
  | "fin"
  | "fra"
  | "frk"
  | "frm"
  | "fry"
  | "gla"
  | "gle"
  | "glg"
  | "grc"
  | "guj"
  | "hat"
  | "heb"
  | "hin"
  | "hrv"
  | "hun"
  | "hye"
  | "iku"
  | "ind"
  | "isl"
  | "ita"
  | "ita_old"
  | "jav"
  | "jpn"
  | "kan"
  | "kat"
  | "kat_old"
  | "kaz"
  | "khm"
  | "kir"
  | "kmr"
  | "kor"
  | "kor_vert"
  | "lao"
  | "lat"
  | "lav"
  | "lit"
  | "ltz"
  | "mal"
  | "mar"
  | "mkd"
  | "mlt"
  | "mon"
  | "mri"
  | "msa"
  | "mya"
  | "nep"
  | "nld"
  | "nor"
  | "oci"
  | "ori"
  | "osd"
  | "pan"
  | "pol"
  | "por"
  | "pus"
  | "que"
  | "ron"
  | "rus"
  | "san"
  | "sin"
  | "slk"
  | "slv"
  | "snd"
  | "spa"
  | "spa_old"
  | "sqi"
  | "srp"
  | "srp_latn"
  | "sun"
  | "swa"
  | "swe"
  | "syr"
  | "tam"
  | "tat"
  | "tel"
  | "tgk"
  | "tha"
  | "tir"
  | "ton"
  | "tur"
  | "uig"
  | "ukr"
  | "urd"
  | "uzb"
  | "uzb_cyrl"
  | "vie"
  | "yid"
  | "yor"
// #endregion

export type Config = Partial<{
  // own options
  binary: string
  debug: boolean
  presets: Preset[] | string[]
  lang: Language | string // alias

  // CLI options
  // https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc
  dpi: number
  l: Language | string
  psm: number
  oem: number
  "tessdata-dir": string
  "user-patterns": string
  "user-words": string

  // any ControlParams
  [key: string]: any
}>

/**
 * @param input - URL, local image path or Buffer
 * @param config - any OCR options and control parameters
 * @returns default output format is text
 */
export function recognize(input: Input, config?: Config): Promise<string>

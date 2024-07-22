declare module 'languagedetect' {
    type Probabilities = [ string, number ];

    /**
     * LanguageDetect is a port of the PEAR::Text_LanguageDetect that can
     * identify human languages from text samples and return confidence
     * scores for each.
     */
    class LanguageDetect {
        /**
         * No parameters required
         */
        constructor();

        /**
         * Detects the closeness of a sample of text to the known languages
         *
         * @param sample The text to run the detection
         * @param limit Max number of matches
         * @example
         * detect('This is a test');
         * @returns All sorted matches language with its matching score
         */
        detect(sample: string, limit?: number): Probabilities[];

        /**
         * List of detectable languages
         *
         * @example
         * getLanguages();
         * @returns All supported languages
         */
        getLanguages(): string[];

        /**
         * Number of languages that the lib can detect
         *
         * @example
         * getLanguageCount();
         * @returns How many languages are supported
         */
        getLanguageCount(): number;

        /**
         * Set the language format to be used in the results
         *
         * Supported types are 'iso2' and 'iso3'. Any other
         * value will result in the full language name being
         * used (default).
         *
         * @example
         * setLanguageType('iso2');
         * @param languageType
         */
        setLanguageType(languageType: string): void;
    }

    export = LanguageDetect;
}

function computeLanguage(language:number){
    switch (language) {
        case 0:
            return "Latin"
    
        default:
            throw new Error(`[Latina] Cannot find the Language: ${language}`);
    }
}

function getLanguageDetails(language: number): {setDetails:string, onlyVocab:boolean}{
    switch (language) {
        case 0:
            return {setDetails: "Latin includes: Vocabulary Sets / Trainer*, Verb Trainer*, Translation*", onlyVocab: false}
    
        default:
            throw new Error(`[Latina] Cannot find the Language: ${language}`);
    }
}

export {computeLanguage, getLanguageDetails}
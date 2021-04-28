module.exports = {
    invalidParams: (message) => {
        return { code: "INVALID_PARAMETERS", message: message }
    },
    unauthorizedRequest: (message) => {
        return { code: "UNAUTHORIZED_REQUEST", message: message }
    },
    invalidRequest: (message) => {
        return { code: "INVALID_REQUEST", message: message }
    },
    notFoundData: (message) => {
        return { code: "NOT_FOUND_DATA", message: message }
    },
    alreadyExist: (message) => {
        return { code: "ALREADY_EXIST", message: message }
    },
    unableToFetch: (message) => {
        return { code: "UNABLE_TO_FETCH_DATA_FROM_BLOCKCHAIN", message: message }
    },
    dataBaseError: (err) => {
        if (err) {
            if (err.code === 11000) {
                return { code: "ALREADY_EXIST", message: err.message || "already exist" }
            } else if (err.code && err.message) {
                return err
            } else {
                return { code: "INTERNAL_SERVER_ERROR", message: err.message || "internal server error" }
            }
        } else {
            return { code: "INTERNAL_SERVER_ERROR", message: "internal server error" }

        }
    },
    serverError: () => {
        return { code: "INTERNAL_SERVER_ERROR", message: "internal server error" }
    },
    recordNotUpdated: (message) => {
        return { code: "RECORD_NOT_UPDATED", message: message }
    },

    cannotSaveRecord: (message) => {
        return { code: "RECORD_NOT_Saved", message: message }
    } , 
    invalidLoginCredentials: (message) => {
        return { code: "INVALID_CREDENTIALS", message: message }
    }

}
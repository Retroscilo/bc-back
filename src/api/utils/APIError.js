const APIError = err => {
	throw new Error(err);
};

module.exports = APIError;

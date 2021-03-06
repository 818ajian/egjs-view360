const {terser} = require("rollup-plugin-terser");

module.exports = terser({
	sourcemap: true,
	output: {
		comments: (node, comment) => {
			const text = comment.value;
			const type = comment.type;

			if (type === "comment2") {
				// multiline comment
				return /@egjs\/view360/.test(text);
			}
			return false;
		}
	}
});

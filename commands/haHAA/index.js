module.exports = {
	Name: "haHAA",
	Aliases: ["4Head", "4HEad", "$HEad"],
	Author: "supinic",
	Last_Edit: "2020-10-03T17:49:26.000Z",
	Cooldown: 5000,
	Description: "Posts a random, hilarious joke, 100% guaranteed.",
	Flags: ["mention","pipe"],
	Whitelist_Response: null,
	Static_Data: null,
	Code: (async function _4head (context) {
		const data = await sb.Got("https://icanhazdadjoke.com/").json();
		return {
			reply: data.joke + " " + context.invocation
		};
	}),
	Dynamic_Description: async (prefix) => {
		return [
			"Posts a random, 100% hilarious dad joke.",
			"Guaranteed to make you grimace",
			"",
	
			`<code>${prefix}4Head</code>`,
			"(random joke)"
		];
	}
};
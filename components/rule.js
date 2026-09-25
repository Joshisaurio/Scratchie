/**
 * Build simple component with color and content
 * @param {string} text 
 * @param {number} color 
 * @returns {object}
 */

function container(text, color) {
    return {
        components: [
            {
                    "type": 17,
                    "accent_color": 9225410,
                    "spoiler": false,
                    "components": [
                        {
                            "type": 10,
                            "content": "## 📜 | Rule 1 - Stay safe!"
                        },
                        {
                            "type": 14,
                            "divider": true,
                            "spacing": 1
                        },
                        {
                            "type": 10,
                            "content": "Don't share personal or sensitive information with anyone, including but not limited to your name, address, phone number, email address, school name, and photos. **You shall not share other peoples sensitive information, regardless of consent.**"
                        },
                        {
                            "type": 1,
                            "components": [
                                {
                                    "type": 2,
                                    "style": 5,
                                    "label": "View full rule",
                                    "emoji": null,
                                    "disabled": false,
                                    "url": "https://discord.com/channels/1140996822131802192/1140996822903566347/1371242029849514084"
                                },
                                {
                                    "type": 2,
                                    "style": 5,
                                    "label": "View rule expansion",
                                    "emoji": null,
                                    "disabled": false,
                                    "url": "https://discord.com/channels/1140996822131802192/1371242029849514084"
                                },
                            ]
                        }
                    ]
                }
        ],
        flags: 32768
    }
}

module.exports = container;
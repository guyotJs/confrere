let german = JSON.parse(`
    [
        {
            "g": "Problem 1.",
            "e": "Sub text - in English.",
            "a": ["Option A", true],
            "b": ["Option B", false],
            "c": ["Option C", false],
            "d": ["Option D", false]
        },
        {
            "g": "Problem 2.",
            "e": "Sub text - in English.",
            "a": ["Option A", true],
            "b": ["Option B", false],
            "c": ["Option C", false],
            "d": ["Option D", false]
        }
    ]
`);
german.sort(() => Math.random() - 0.5);

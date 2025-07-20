// ai.js

function askQuestion() {
    const userQuestion = document.getElementById("user-question").value;
    const aiResponse = document.getElementById("ai-response");

    if (!userQuestion) {
        aiResponse.textContent = "Please ask a question about mental health.";
        return;
    }

    // Simulated AI response - Updated to cover more questions
    const simulatedAnswers = {
        "What is mindfulness?": "Mindfulness is a mental practice that involves focusing on the present moment, which can help reduce stress and improve emotional well-being.",
        "How do I manage anxiety?": "Exercise, proper sleep, and meditation are effective ways to reduce anxiety. It's also helpful to talk to a therapist.",
        "What are the benefits of good sleep?": "Good sleep improves memory, reduces stress, and boosts emotional health.",
        "How can I improve my mood?": "Try activities like journaling, taking a walk, or practicing deep breathing exercises to improve your mood.",
        "What should I do if I feel overwhelmed?": "Take deep breaths, talk to someone you trust, and focus on grounding techniques to help calm down.",
        "What is depression?": "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest in activities."
    };

    // Check if the question exists in the predefined answers
    const response = simulatedAnswers[userQuestion] || "I'm not sure about that. Try asking a more specific mental health-related question!";
    aiResponse.textContent = response;
}



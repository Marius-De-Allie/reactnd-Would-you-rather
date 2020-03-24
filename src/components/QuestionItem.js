import React from 'react';

const QuestionItem = () => (
    <div>
        <h3>Author's Name asks:</h3>
        <div>
            <div>Avatar Image</div>{/*Convert to img element*/}
            <div className="question-content">
                <h3>Would you Rather</h3>
                <p>...question text...</p>
                <button>View Poll</button>
            </div>
        </div>
    </div>
);


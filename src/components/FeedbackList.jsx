import FeedbackItem from "@/components/FeedbackItem";

export default function FeedbackList({ feedbacks, onDelete }) {
    if (feedbacks.length === 0) {
        return <p className="text-gray-500">No feedback submitted.</p>;
    }

    return(
        <div className ="space-y-4">
            {feedbacks.map((f, i) => (
                <FeedbackItem 
                    key={i} 
                    index={f} 
                    feedback={f}
                    onDelete={onDelete} 
                />
            ))}

        </div>
    )

}
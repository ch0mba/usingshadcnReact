import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";


export default function FeedbackForm({ onAdd }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const jhandleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim() || !rating.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        onAdd({ name, comment, rating });
        setName("");
        setComment("");
        setRating("");

        toast.success("Feedback submitted successfully!")};

    return (
        <form className="space-y-4" onSubmit={jhandleSubmit}>
            <Input 
                placeholder="Student Name ..." 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <Textarea 
                placeholder="Your Feedback ..." 
                value={comment} 
                onChange={e => setComment(e.target.value)}
            />
            <Input
                placehholder="Rating (1-5)"
                type="number"
                value={rating}
                onChange={e => setRating(e.target.value)}
            />

            <Button type="submit">Submit Feedback</Button>
         </form>
    )

}
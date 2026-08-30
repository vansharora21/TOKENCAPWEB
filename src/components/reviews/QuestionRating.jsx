"use client";

const RATINGS = ["Very Good", "Good", "Okay", "Needs Improvement"];

const STYLES = {
  default: "border-card-border text-muted hover:border-card-hover hover:text-foreground",
  "Very Good":   { idle: "border-card-border text-muted hover:border-card-hover hover:text-foreground", active: "border-foreground text-foreground bg-pre-bg" },
  "Good":        { idle: "border-card-border text-muted hover:border-card-hover hover:text-foreground", active: "border-foreground text-foreground bg-pre-bg" },
  "Okay":        { idle: "border-card-border text-muted hover:border-card-hover hover:text-foreground", active: "border-foreground text-foreground bg-pre-bg" },
  "Needs Improvement": { idle: "border-card-border text-muted hover:border-card-hover hover:text-foreground", active: "border-foreground text-foreground bg-pre-bg" },
};

function QuestionRating({ question, value, onChange }) {
  return (
    <div className="space-y-2.5">
      <p className="text-sm text-foreground/80">{question}</p>
      <div className="flex flex-wrap gap-2">
        {RATINGS.map((rating) => {
          const isSelected = value === rating;
          return (
            <button
              key={rating}
              type="button"
              onClick={() => onChange(rating)}
              className={`
                px-3 py-1 border text-sm transition-all duration-100 cursor-pointer
                ${isSelected ? STYLES[rating].active : STYLES[rating].idle}
              `}
            >
              {isSelected ? "▸ " : "· "}{rating}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { QuestionRating, RATINGS };

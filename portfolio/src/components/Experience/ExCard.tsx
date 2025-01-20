import './ExCard.css'

interface ExCardProps {
    company: string;
    title: string;
    date: string;
    description: string;
}

export const ExCard = ({ company, title, date, description }: ExCardProps) => {
    return (
        <div className="excard-wrapper">
            <h2 className="ex-card-company">{company}</h2>
            <h3 className="ex-card-title">{title}</h3>
            <p className="ex-card-date">{date}</p>
            <p className="ex-card-description">{description}</p>
        </div>
    );
};

export default ExCard

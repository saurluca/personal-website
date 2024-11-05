import { FC } from 'react'

interface TextParagraphProps {
    alignment: 'left' | 'right';
    children: React.ReactNode;
}

const TextParagraph: FC<TextParagraphProps> = ({ children, alignment }) => {
    return (
        <div className={`text-${alignment} mb-14`}>
            <p className={`text-2xl text-gray-600 max-w-xl ${alignment === 'right' ? 'ml-auto' : ''}`}>
                {children}
            </p>
        </div>
    )
}

export default TextParagraph

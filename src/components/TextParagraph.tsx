import { FC } from 'react'

interface TextParagraphProps {
    alignment: 'left' | 'right';
    children: React.ReactNode;
}

const TextParagraph: FC<TextParagraphProps> = ({ children, alignment }) => {
    return (
        <div className={alignment === 'right' ? 'text-right' : 'text-left'}>
            <p className={`text-[1.5rem] text-gray-600 max-w-[650px] leading-[1.35] ${alignment === 'right' ? 'ml-auto' : ''}`}>
                {children}
            </p>
        </div>
    )
}

export default TextParagraph

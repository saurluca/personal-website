import TextParagraph from "../components/TextParagraph.tsx";

// <div className="relative">
//     {/* Hero section with full-screen image */}
//     {/*<div className="h-screen relative">*/}
//     {/*    <img */}
//     {/*        src="/src/assets/main.jpg"*/}
//     {/*        alt="Hero background" */}
//     {/*        className="w-full h-full object-cover"*/}
//     {/*        loading="eager"*/}
//     {/*    />*/}
//     {/*</div>*/}
const IndexPage = () => {
    return (
        <div className="h-screen bg-white flex flex-col justify-center px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-7xl font-bold mb-4 mt-24">
                    Luca Saur
                </h1>
                <h2 className="text-4xl w-2xl text-gray-700 mb-24">
                    Fullstack developer and funny dude
                </h2>

                <TextParagraph alignment="right">
                     <a href="mailto:mail@lucasaur.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">mail@lucasaur.com</a><br/>
                    I am a curious human being who takes live with a grain of salt. You can often find me coding, chilling, laughing or fighting
                    somebody on the mat.
                </TextParagraph>

                <TextParagraph alignment="left">
                    <a href="https://memetasks.com" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Memetasks</a> <br/>
                    Is a passion project of mine. It's a minimalistic todo app, but with a twist. Checking of task rewards you with AI generated
                    memes.
                </TextParagraph>

                <TextParagraph alignment="right">
                    <a href="https://databites.de" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Databites</a> <br/>
                    A german startup, I am working for. It focuses on bringing data driven insights to the bakery world.<br/><br/>
                    I am currently studying Cognitive Science<br/>
                    with a focus on AI, at the University of Osnabrück.<br/><br/>
                </TextParagraph>

                <div>
                    Github, mail@lucasaur.com
                    Javascript (React, Vue), Python (Django, ML), Java, Linux user, Docker,
                </div>

                {/*<TextParagraph alignment="left">*/}
                {/*    I am also a freelance developer. I have worked on projects ranging from web development to machine learning.*/}
                {/*</TextParagraph>*/}
            </div>
        </div>
    )
}

export default IndexPage
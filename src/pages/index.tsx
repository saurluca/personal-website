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
        <div className="h-full w-full bg-special">
            <div className="h-dvh bg-special max-w-7xl mx-auto w-full flex flex-col gap-8 pt-16 px-2 pb-2">
                <div className="mb-12">
                    <h1 className="text-7xl font-bold">
                        Luca Saur
                    </h1>
                    <h2 className="text-4xl w-2xl text-gray-700">
                        Fullstack developer and funny dude
                    </h2>
                </div>

                <TextParagraph alignment="right">
                    <a href="mailto:mail@lucasaur.com" className="text-blue-600 hover:underline" target="_blank"
                       rel="noopener noreferrer">mail@lucasaur.com</a><br/>
                    I am a curious human being who takes live with a grain of salt. You can often find me coding, chilling, laughing or fighting
                    somebody on the mat.
                </TextParagraph>

                <TextParagraph alignment="left">
                    <a href="https://memetasks.com" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Memetasks</a><br/>
                    Is a passion project of mine. It's a minimalistic todo app, but with a twist. Checking of task rewards you with AI generated
                    memes.
                </TextParagraph>

                <TextParagraph alignment="right">
                    <a href="https://databites.de" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Databites</a> <br/>
                    A german startup, I am working for as a Fullstack Developer. It brings data to the bakery world.<br/>
                    I am also studying Cognitive Science<br/>
                    at the University of Osnabrück.
                </TextParagraph>


                <TextParagraph alignment="left">
                    <a href="https://github.com/saurluca" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Github</a> <br/>
                    I love to dive deep into a project<br/>
                    But at the same time, to explore many different paths.<br/>
                    Skills: Javascript (React, Vue.js), Python (Django, ML), Java
                </TextParagraph>
            </div>

        </div>
    )
}

export default IndexPage

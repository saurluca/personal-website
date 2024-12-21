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
//     Hello
const IndexPage = () => {
    return (
        <div className="h-full w-full bg-special">
            <div className="min-h-screen bg-special max-w-[1300px] mx-auto w-full flex flex-col gap-12 pt-14 px-2 pb-4">
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
                    I'm a curious human being who approaches live with a sense of humour. You can often find me coding, chilling, laughing or fighting
                    somebody on the mat.
                </TextParagraph>

                <TextParagraph alignment="left">
                    <a href="https://memetasks.com" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Memetasks</a><br/>
                    A passion project — a minimalist to-do app with a twist: completing tasks rewards you with AI-generated memes
                </TextParagraph>

                <TextParagraph alignment="right">
                    <a href="https://databites.de" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Databites</a> <br/>
                    A german startup, I am working for as a Fullstack Developer.<br/>
                    Also currently pursuing a B.Sc. in Cognitive Science at the University of Osnabrück, specializing in Artificial Intelligence.
                </TextParagraph>

                <TextParagraph alignment="left">
                    <a href="https://github.com/saurluca" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">Github</a> <br/>
                    I enjoy immersing myself in new subjects<br/>while quickly acquiring the necessary skills.<br/>
                    Skills: AI, JavaScript (React, Vue), Python (Django, ML), Java<br/>
                    Tools: Git, GitHub Actions, Docker, Linux
                </TextParagraph>
            </div>
        </div>
    )
}

export default IndexPage

import FaqCard from "./FaqCard.jsx";

const FaqSection = () => (
    <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions about Ghibli AI</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <FaqCard question="What is the Studio Ghibli AI Generator?">
                The Ghibli AI Generator is an advanced platform powered by AI that creates original artwork in the distinctive style of Studio Ghibli films. Our technology transforms photos or text descriptions into beautiful Ghibli art images with authentic aesthetic elements.
            </FaqCard>
            <FaqCard question="What are the key features of the Ghibli AI?">
                Key features include photo-to-Ghibli art transformation, text-to-Ghibli image generation, Ghibli character creation, scene extension, Ghibli background generation, and animation preparation - all in authentic Studio Ghibli style using our specialized Ghibli generator.
            </FaqCard>
            <FaqCard question="Can I select specific Ghibli film styles for my Ghibli art?">
                Absolutely! You can choose influences from various Studio Ghibli films like 'Spirited Away,' 'Princess Mononoke,' or 'My Neighbor Totoro' and customize the style, mood, and visual elements to reflect your creative vision in the generated Ghibli images.
            </FaqCard>
            <FaqCard question="Is the Studio Ghibli AI Generator available on mobile?">
                Yes, our Ghibli AI platform is accessible on both desktop and mobile devices via web browsers, allowing you to create Ghibli-style artwork and Ghibli images wherever you are.
            </FaqCard>
        </div>
    </div>
);

export default FaqSection;
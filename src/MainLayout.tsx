import Footer from "@/section/footer";
import Header from "@/section/header";
import Hero from "@/section/hero";
import Services from "@/section/services";
import Features from "@/section/features";
import Reviews from "@/section/reviews";
import Prices from "@/section/prices";

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <Features />
                <Reviews />
                <Prices />
                <Footer />
            </main>
        </div>
    );
};

export default MainLayout;
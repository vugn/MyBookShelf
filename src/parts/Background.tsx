import OrangeVector from "../assets/images/vectors/OrangeVector.svg";

type BackgroundProps = {
    children: React.ReactNode; // 👈️ type children
};

export default function Background(props: BackgroundProps) {
    return <div className="app" style={{
        backgroundImage: `url(${OrangeVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        top: 0,
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
    }}>
        {props.children}
    </div>;
}
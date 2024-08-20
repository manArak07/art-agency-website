import Header from "./header";

export default function Layout(props) {
    return (
        <div className="font-lora">
            <Header />
            <main>{props.children}</main>
        </div>
    )
}
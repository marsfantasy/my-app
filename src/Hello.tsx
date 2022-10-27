import React from "react"

class Hello extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Hello' };
    }

    render() {
        const firstNumberElement = getFirstElement([1, 2, 3, 4, 5]);
        const firstStringElement = getFirstElement(["A", "B", "C"]);

        return (
            <div className="">
                <h1>{this.state.value}, world!</h1>
                <h2>{firstNumberElement}</h2>
                <h2>{firstStringElement}</h2>
            </div>
        )
    }
}

function getFirstElement<T>(arr: T[]) {
    const [firstElement] = arr;
    return firstElement;
}

export default Hello;
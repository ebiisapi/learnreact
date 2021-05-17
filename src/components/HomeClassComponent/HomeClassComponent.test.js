import{shallow} from "enzyme";
import { Component } from "react";
import HomeClassComponent from ".";

describe("Home Class Component", () => {
    it("should have at least 2 agendas", () => {
        let component = shallow(<HomeClassComponent />);
        expect(component.state().agendas.length).toBe(3);
    })
})
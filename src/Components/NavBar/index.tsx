import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { NavbarItems } from "../../common/constants";
import Button from "../../common/componets/Button";

type NavbarProps = RouteComponentProps;

const NavBar = (props: NavbarProps) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">Bolt</a>
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button" data-toggle="collapse" data-target="#navb"
                aria-expanded="true"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navb" className="navbar-collapse collapse hide">
                <ul className="navbar-nav">
                    {Object.keys(NavbarItems).map((key) => {
                        return (
                            <li className="nav-item" key={key} onClick={() => props.history.push(`/${key}`)}>
                                <a className="nav-link">{NavbarItems[`${key}`]}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Button className="btn-success btn-circle__btn-sm">Log in</Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);
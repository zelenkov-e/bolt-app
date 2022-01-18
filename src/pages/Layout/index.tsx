import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type LayoutProps = RouteComponentProps<{ page: string }>

const Layout = (props: LayoutProps) => {
    const { page } = props.match.params

    return (
        <div
            style={{ fontSize: '32px', color: '#FFF' }}
            className="container d-flex justify-content-md-center  align-items-md-center">
            {page}
        </div>
    )
}

export default withRouter(Layout);
import React, { FC } from "react";

import "./styles.scss";

interface ProgressBarProps { status: string }

const ProgressBar: FC<ProgressBarProps> = ({ status }) => {
    return (
        <div className={`spinner-border text-${status} progerss-bar`} role="status" />
    )
}

ProgressBar.defaultProps = {
    status: `primary`,
};

export default ProgressBar;
import * as React from "react";

const Error = ({
    statusCode,
}) => {
    return (
        <div>
            {"Error!!!"}
            {statusCode}
        </div>
    );
};

Error.getInitialProps = async ({ res, err }) => {
    let statusCode;

    if (res) {
        ({ statusCode } = res);
    } else if (err) {
        ({ statusCode } = err);
    }

    return {
        statusCode,
    };
};

export default Error;

import Script from "next/script";

const EmbedForm = () => {
    return (
        <div>
            <div id='fsForm6098832'></div>
            <Script
                type='text/javascript'
                src='https://fsapac-jeroldcuico.formstack.com/forms/js.php/embed_code?useDynamicRendering=true'
                strategy='afterInteractive'
            ></Script>
            <noscript>
                <a
                    href='https://fsapac-jeroldcuico.formstack.com/forms/embed_code'
                    title='Online Form'>
                    Online Form - Embedded Form Test
                </a>
            </noscript>
            <div style={{ textAlign: "center", fontSize: "x-small" }}>
                <a
                    href='http://www.formstack.com?utm_source=jsembed&utm_medium=product&utm_campaign=product+branding&fa=h,6098832'
                    title='Powered by Formstack'>
                    Powered by Formstack
                </a>
            </div>
        </div>
    );
}

export default EmbedForm
"use client";

import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'Spanish', value: '/auto/es' }
];

export function GoogleTranslate() {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    // if (hasCookie('googtrans')) {
    //     setSelected(getCookie('googtrans'))
    // }
    // else {
    //     setSelected('/auto/en')
    // }

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            // autoDisplay: true,
            // includedLanguages: "en, esp", // If you remove it, by default all google supported language will be included
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');
    }

    const langChange = (e, m, evt) => {
        evt.preventDefault()
        if (hasCookie('googtrans')) {
            setCookie('googtrans', decodeURI(e))
            setSelected(e)
        }
        else {
            setCookie('googtrans', e)
            setSelected(e)
        }
        window.location.reload()
    }

    return (
        <>
            <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', top:0 }}></div>
            {/* <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang" /> */}
        </>

    )
};
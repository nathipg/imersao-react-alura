import React from 'react';

function FormField({tag, label, type, name, value, onChange}) {
    let tagElement = null;

    switch(tag) {
        case 'textarea':
            tagElement = <textarea
                name={name}
                value={value}
                onChange={onChange}
            />
            break;
        default:
            tagElement = <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />;
            break;
    }
    
    return (
        <div>
            <label>
                {label}:
                {tagElement}
            </label>
        </div>
    );
}

export default FormField;
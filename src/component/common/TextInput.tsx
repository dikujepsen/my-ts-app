import * as React from 'react';
import { observer } from 'mobx-react';

interface ITextInputProps {
    name: string;
    label: string;
    onChange: (event: any) => void;
    value: string;
    error: string;
    readonly?: boolean;
}

@observer
class TextInput extends React.Component<ITextInputProps, any> {
    constructor(props: ITextInputProps) {
        super(props);
    }

    render() {
        const error = this.props.error;
        const name = this.props.name;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const readonly = this.props.readonly;
        const label = this.props.label;

        let wrapperClass = 'form-group';
        if (error && error.length > 0) {
            wrapperClass += ' ' + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <input
                        type="text"
                        name={name}
                        className="form-control"
                        value={value}
                        onChange={onChange}
                        readOnly={readonly}
                    />
                    {error && <div className="alert alert-danger"> {error} </div>}
                </div>

            </div>
        );
    }
}


export default TextInput;

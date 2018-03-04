import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';


describe('Can display dom button', () => {
    it('Button should change text after click', () => {
        const button = TestUtils.renderIntoDocument(
            <button
                onClick={ e => e.currentTarget.innerHTML = 'Bye' }>
                Hello
            </button>
        );

        if (button instanceof Element) {
            expect(ReactDOM.findDOMNode(button).textContent).toEqual('Hello');

            TestUtils.Simulate.click(button);
            expect(ReactDOM.findDOMNode(button).textContent).toEqual('Bye');
        }
    });
});
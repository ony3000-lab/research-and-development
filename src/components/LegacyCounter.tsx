import React from 'react';

type LegacyCounterProps = {};

type LegacyCounterState = {
  count: number;
};

function decoratedLog(message?: any) {
  console.log(
    `%cLegacyCounter%c ${message}`,
    'background-color: #f87171; color: #262626; font-weight: bold; padding: 2px 4px; border-radius: 4px;',
    'background-color: transparent; color: initial;',
  );
}

// eslint-disable-next-line react/prefer-stateless-function
class LegacyCounter extends React.Component<LegacyCounterProps, LegacyCounterState> {
  constructor(props: LegacyCounterProps) {
    super(props);

    this.state = {
      count: 0,
    };

    this.incrementHandler = this.incrementHandler.bind(this);
  }

  componentDidMount(): void {
    decoratedLog('[2] componentDidMount');
  }

  componentDidUpdate(): void {
    decoratedLog('[5] componentDidUpdate');
  }

  componentWillUnmount(): void {
    decoratedLog('[3] componentWillUnmount');
  }

  incrementHandler() {
    decoratedLog('[4] setState');
    this.setState((prevState) => {
      const { count } = prevState;

      return {
        ...prevState,
        count: count + 1,
      };
    });
  }

  render() {
    decoratedLog('[1] render');
    const { count } = this.state;

    return (
      <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-red-500 py-0.5 px-1 dark:border-rose-400">
        <span className="px-1">LegacyCounter</span>
        <span className="px-1 font-bold">{count}</span>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-1"
          onClick={this.incrementHandler}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
            <i className="fa-solid fa-plus" />
          </span>
        </button>
      </div>
    );
  }
}

export default LegacyCounter;

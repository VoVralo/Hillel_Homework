import React, { Component } from 'react';

class EmojiVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, symbol: '😊', votes: 0 },
        { id: 2, symbol: '😢', votes: 0 },
        { id: 3, symbol: '😎', votes: 0 }
      ],
      showResults: false
    };
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem('votes');
    if (savedVotes) {
      this.setState({ emojis: JSON.parse(savedVotes) });
    }
  }

  handleVote = (id) => {
    const updatedEmojis = this.state.emojis.map(emoji => {
      if (emoji.id === id) {
        return { ...emoji, votes: emoji.votes + 1 };
      }
      return emoji;
    });
    this.setState({ emojis: updatedEmojis });
    localStorage.setItem('votes', JSON.stringify(updatedEmojis));
  };

  showResults = () => {
    this.setState({ showResults: true });
  };

  clearResults = () => {
    this.setState({
      emojis: this.state.emojis.map(emoji => ({ ...emoji, votes: 0 })),
      showResults: false
    });
    localStorage.removeItem('votes');
  };

  getWinningEmoji = () => {
    return this.state.emojis.reduce((prev, current) => 
      (prev.votes > current.votes) ? prev : current
    );
  };

  render() {
    const { emojis, showResults } = this.state;
    const winningEmoji = this.getWinningEmoji();

    return (
      <div>
        <h1>Vote for your favorite emoji!</h1>
        <div>
          {emojis.map(emoji => (
            <button key={emoji.id} onClick={() => this.handleVote(emoji.id)}>
              {emoji.symbol} ({emoji.votes})
            </button>
          ))}
        </div>
        <div>
          <button onClick={this.showResults}>Show Results</button>
          <button onClick={this.clearResults}>Clear Results</button>
        </div>
        {showResults && (
          <div>
            <h2>Winner!</h2>
            <p>{winningEmoji.symbol} with {winningEmoji.votes} votes</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVote;

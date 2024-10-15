export interface GameState {
  players: Player[];
  tournament_id: string;
  game_id: string;
  round: number;
  bet_index: number;
  small_blind: number;
  orbits: number;
  dealer: number;
  community_cards: Card[];
  current_buy_in: number;
  pot: number;
}

export interface Card {
  rank: string;
  suit: string;
}

export class Player {
  public name = '';
  public stack = 0;
  public status = '';
  public bet = 0;
  public hole_cards: Card[] = [];
  public version = '';
  public id = 0;
<<<<<<< HEAD
  public CARD_MAPPING = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
=======
>>>>>>> 1f786b5 (Str 6)

  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const { community_cards, players } = gameState;
    let bet = 0;
    const hand = this.findMyPlayer(gameState);
    const highestBet = this.getHighestBet(gameState);

    const cardsInGame = hand.hole_cards.concat(community_cards);

    if (hand.hole_cards[0].rank === hand.hole_cards[1].rank) {
      bet = highestBet * 2;
    }

    hand.hole_cards.forEach((card: Card) => {
      if (this.cardExistsInCommunity(card, community_cards)) {
        bet = highestBet * 2;
      }
    });


    betCallback(bet);
  }

  public showdown(gameState: any): void {

  }

  private findMyPlayer(gameState: GameState): any {
    
    return gameState.players.find(player => player.name === 'All in');
  }

  private getHighestBet(gameState: GameState): number {
    return gameState.players.reduce((highestBet, player) => {
      if (player.bet > highestBet) {
        return player.bet;
      }
      return highestBet;
    } , 0);
  }

  private cardExistsInCommunity(handCard: Card, community_cards: Card[]): boolean {
    return community_cards.some(communityCard => communityCard.rank === handCard.rank);
  }

  private checkDoubles(cardsInGame: Card[]): boolean {
    return true;
  }

  private checkHighestCard(gameState: GameState, hand: Card[]): number {
    return 0;
  }
};

export default Player;

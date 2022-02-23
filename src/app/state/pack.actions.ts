import { createAction, props } from '@ngrx/store';
import { PlayerComponent } from 'app/player/player.component';
import { Card } from '../models/cards.model';
import { Player } from '../models/player.model'
import {PlayerHand} from '../models/playerHand.model'

export const addCard = createAction(
  '[Pack] add card',
  props<{ cardId: string }>()
);

export const drawCard = createAction(
  '[Pack] draw a Card',
  props<{ cardId: string }>() //random card 
);

export const createdPack = createAction(
  'Create pack with x deck, unshuffled success ',
  props<{ somepack: ReadonlyArray<Card> }>()
);

export const raiseInitialBet = createAction(
  '[Hands] Set initial bet for player hands',
  props<{initialBet: number}>()
);

export const dealCard = createAction(
  'Dealing a random card to a player',
  props<{
    tempoplayer: Player,
    cardToDeal: Card,
    handIdentifier :string,
    }>()
)

export const createPlayers = createAction(
  '[Players] Creating players... success',
  props<{ somePlayers: ReadonlyArray<Player> }>()
);

export const emptyHand = createAction(
  '[Hand]Creating first hands',
  props<{ tempoplayer: Player }>()
);

export const createHands = createAction(
  '[Hands] Creating playersHands... success',
  props<{ someHands: ReadonlyArray<PlayerHand> }>()
);


export const setSplittable = createAction(
  '[Hand] Setting/ unsetting splittability  ',
  props<{ id:string , userId:number, statusSplittable:string }>()
);

export const shiftDecision = createAction(
  '[Players] Shifting decision between players',
  props<{
    currentPlayer: Player,
    nextPlayer: Player | undefined,
    currentIndex: number,
    nextIndex: number | undefined
  }>()
);

export const splitPair = createAction(
  '[Player] Splitting a pair in half with the initial bet',
  props<{
      hand: PlayerHand
  }>()
)



export const changeChipCount = createAction(
    '[Chips] Some player is losing/winning money',
    props<{ playerId:number, pchips: number,handId:string, newchipsraised }>()
  );


  export const isOut = createAction(
    '[Player] Is out of this round ... ',
    props<{ playerId:number, }>()
  );


  //didnt use entities so gotta use this to speed things up 
  export const acessor = createAction(
    '[Player] Player modified ',
    props<{ player:Player, }>()
  );




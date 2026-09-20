import '../styles/components/leaderboard-table.scss';

const players = [
  {
    rank: 1,
    initials: 'AP',
    name: 'Alex_Pro99',
    gamesPlayed: 142,
    totalScore: '94,250',
    streak: '12 days',
    favoriteGame: 'Heartopia',
    avatarClass: 'player-avatar--gold',
    rankClass: 'player-rank--gold',
  },
  {
    rank: 2,
    initials: 'CG',
    name: 'CozyGamer_x',
    gamesPlayed: 118,
    totalScore: '81,400',
    streak: '8 days',
    favoriteGame: 'Cat Mail Co.',
    avatarClass: 'player-avatar--green',
    rankClass: 'player-rank--default',
  },
  {
    rank: 3,
    initials: 'MM',
    name: 'MatchMaster',
    gamesPlayed: 98,
    totalScore: '72,110',
    streak: '5 days',
    favoriteGame: 'Tiny Glade',
    avatarClass: 'player-avatar--blue',
    rankClass: 'player-rank--default',
  },
  {
    rank: 4,
    initials: 'BP',
    name: 'BubblePop',
    gamesPlayed: 87,
    totalScore: '65,900',
    streak: '3 days',
    favoriteGame: 'Whisper of the House',
    avatarClass: 'player-avatar--pink',
    rankClass: 'player-rank--default',
  },
  {
    rank: 5,
    initials: 'SG',
    name: 'SudokuGod',
    gamesPlayed: 74,
    totalScore: '59,320',
    streak: '2 days',
    favoriteGame: 'Cat Chess',
    avatarClass: 'player-avatar--purple',
    rankClass: 'player-rank--default',
  },
];

export function createLeaderboardTable(): HTMLElement {
  const leaderboard = document.createElement('section');

  leaderboard.classList.add('leaderboard-section');

  leaderboard.innerHTML = `
    <div class="container">
      <div class="leaderboard__title">
        <div class="section-subtitle">
          <div class="section-subtitle_accent"></div>
          <h2 class="section-subtitle_title--full">Top Players This Week</h2>
          <h2 class="section-subtitle_title--short">Top Players</h2>
        </div>
      </div>

      <div class="leaderboard-wrapper">
        <table class="players-table">
          <thead>
            <tr class="table-row table-row--header">
              <th class="table-cell table-cell--head table-cell--rank">
                <span class="table-cell-label">Rank</span>
              </th>
              <th class="table-cell table-cell--head table-cell--player">
                <span class="table-cell-label">Player</span>
              </th>
              <th class="table-cell table-cell--head">
                <span class="table-cell-label--full">Games Played</span>
                <span class="table-cell-label--short">Games</span>
              </th>
              <th class="table-cell table-cell--head">
                <span class="table-cell-label--full">Total Score</span>
                <span class="table-cell-label--short">Score</span>
              </th>
              <th class="table-cell table-cell--head">
                <span class="table-cell-label">Streak</span>
              </th>
              <th class="table-cell table-cell--head">
                <span class="table-cell-label">Favorite Game</span>
              </th>
            </tr>
          </thead>
          <tbody class="players-tbody">
            ${players
              .map(
                (player) => `
                  <tr class="table-row">
                    <td class="table-cell table-cell--rank">
                      <span class="player-rank ${player.rankClass}">#${player.rank}</span>
                    </td>
                    <td class="table-cell table-cell--player">
                      <div class="player-info">
                        <span class="player-avatar ${player.avatarClass}">${player.initials}</span>
                        <span class="player-name">${player.name}</span>
                      </div>
                    </td>
                    <td class="table-cell">
                      <span class="player-value">${player.gamesPlayed}</span>
                    </td>
                    <td class="table-cell">
                      <span class="player-value player-value--score">${player.totalScore}</span>
                    </td>
                    <td class="table-cell">
                      <span class="player-streak player-streak--full">🔥 ${player.streak}</span>
                      <span class="player-streak player-streak--short">🔥 ${player.streak.replace(' days', ' d')}</span>
                    </td>
                    <td class="table-cell table-cell--favorite">
                      <span class="game-badge">${player.favoriteGame}</span>
                    </td>
                  </tr>
                `,
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return leaderboard;
}

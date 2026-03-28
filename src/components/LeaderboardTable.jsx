import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { RankCharts } from './Charts'

const LeaderboardTable = ({ teams }) => {
    return(

        <div id="ldbContainer">    
          <table id="leaderboard">          
            <thead>

              <tr>
                                
                <th>Clube</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>VIT</th>
                <th>Emp</th>
                <th>DER</th>
                <th>GM</th>
                <th>GC</th>
                <th>SG</th>

              </tr>  

            </thead>

            <tbody>

              {teams.map((item) => (
                <tr key={item.idTeam}>
                  <td style={{textAlign: 'left'}}> {item.intRank}. &nbsp;
                  <img src={item.strBadge} alt={item.strTeam} style={{width: '2em', verticalAlign: 'middle', margin: '0 10px 0 10px'}}/>  
                  <a>{item.strTeam}</a> </td>
                  <td> {item.intPoints} </td>
                  <td> {item.intPlayed} </td>
                  <td> {item.intWin} </td>
                  <td> {item.intDraw} </td>
                  <td> {item.intLoss} </td>
                  <td> {item.intGoalsFor} </td>
                  <td> {item.intGoalsAgainst} </td>
                  <td> {item.intGoalDifference} </td>
                </tr>
              ))}

            </tbody>

        </table> 

        <RankCharts teams={teams}></RankCharts>

       
        </div>

        
    );
};

export default LeaderboardTable;

import { addNewPlayers, getPlayers, getPlayerById, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
  //  GET endpoint
    .get(getPlayers)
  //  POST endpoint
    .post(addNewPlayers);
  
  app.route('/player/:PlayerId')
    //  GET palyer by ID
    .get(getPlayerById)
    //  Update player by ID
    .put(updatePlayer)
    //  Delete player by ID
    .delete(deletePlayer)
}

export default routes;
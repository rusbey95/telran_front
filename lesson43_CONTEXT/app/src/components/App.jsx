import { MyContextProvider } from './../MyContext';
import AddNewPost from './Post/AddNewPost';
import PostsContainer from './Post/PostsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePost from './Pages/SinglePost';
// import Home from './Pages/Home';

function App() {
	return (
		<MyContextProvider>
			<Router>
				<Routes>
					<Route path='/' element={
						<>
							<AddNewPost />
							<PostsContainer />
						</>
					}/>
					<Route path='/post/:id' element={<SinglePost />} />
				</Routes>
			</Router>
		</MyContextProvider>
	);
}

export default App;

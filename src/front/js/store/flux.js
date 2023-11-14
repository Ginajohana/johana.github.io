const getState = ({ getStore, getActions, setStore }) => {
	
	return {
	  store: {
		message: null,
		displayText: "",
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		]
	  },
	  actions: {
		changeTextGradually: () => {
		  const store = getStore();
		  const newTexts = ["Full-stack Developer ", "Creative", "Passionate Learner", "Tech Enthusiast", "Team Player", ""];
  
		  let currentIndex = 0;
		  const interval = setInterval(() => {
			if (currentIndex < newTexts.length) {
			  setStore({ displayText: newTexts[currentIndex] });
			  currentIndex++;
			} else {
			  currentIndex = 0;
			}
		  }, 3000);
		},
		getMessage: async () => {
		  try {
			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
			const data = await resp.json();
			setStore({ message: data.message });
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
	  }
	};
  };
  
  export default getState;
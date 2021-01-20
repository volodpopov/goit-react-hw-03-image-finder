// this.setState(prevState => ({ loading: true, hits: prevState.hits }));
// pixabayApi
//   .fetchImage(this.props.query, this.state.currentPage)
//   .then(({ hits }) =>
//     this.setState(prevState => ({
//       hits: [...prevState.hits, ...hits],
//       currentPage: prevState.currentPage + 1,
//     })),
//   )
//   .catch(error => this.setState({ error }))
//   .finally(() => this.setState({ loading: false }));
// // -----------------------------------------------------------------
// this.setState({ loading: true, hits: prevState.hits });
// pixabayApi
//   .fetchImage(this.props.query, this.state.currentPage)
//   .then(({ hits }) =>
//     this.setState({
//       hits: hits,
//       currentPage: prevState.currentPage + 1,
//     }),
//   )
//   .catch(error => this.setState({ error }))
//   .finally(() => this.setState({ loading: false }));

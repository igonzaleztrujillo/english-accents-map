import { connect } from 'react-redux'
import SuggestPage from './SuggestPage'

const mapStateToProps = (state) => ({
  authLoading: state.ui.auth.loading,
  user: state.ui.auth.user
})

export default connect(mapStateToProps)(SuggestPage)

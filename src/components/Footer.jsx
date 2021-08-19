import '../styles/App.css'

export default function Footer(props) {
  return (
      <div className="App-footer">
          <div>{props.footer}</div>
      </div>
  )
}
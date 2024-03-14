import "./RodaPe.css"

const RodaPe = () => {
    const anoAtual = new Date().getFullYear()

    return <footer>
        <span className="texto-copyright">
        Copyright © {anoAtual} - Todos os direitos reservados - Gabriel Vargas.
        </span>
    </footer>

}

export default RodaPe;
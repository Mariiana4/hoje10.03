import { useState, UseState } from 'react'
import React from 'react'
import './Formulario_Cadastro.css'

function Formulario_Cadastro() {
    const [nomeCadastro, setNomeCadastro] = useState('')
    const [emailCadastro, setEmailCadastro] = useState('')
    const [numeroCelularCadastro, setNumeroCelularCadastro] = useState('')
    const [senhaCadastro, setSenhaCadastro] = useState('')

    const cadastrarCliente = (event) => {
        event.preventDefault()
        console.log({nomeCadastro, emailCadastro, numeroCelularCadastro, senhaCadastro})
    }

  return (
    <>
      <main>

        <div className="container_formCadastro">
            <h2 className="titulo-cadastro_formCadastro">Cadastre-se</h2>

            <form className="container_input-label_formCadastro" onSubmit={cadastrarCliente}>
                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="nome-completo">Nome completo (Campo obrigatório)</label>
                    <input 
                        className="input_formCadastro" 
                        type="text" 
                        id="nome-completo" 
                        placeholder="Obrigatório" 
                        required
                        value={nomeCadastro}
                        onChange={(event) => setNomeCadastro(event.target.value)}
                    />
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="email">E-mail (Campo obrigatório)</label>
                    <input 
                        className="input_formCadastro" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Obrigatório" 
                        required
                        value={emailCadastro}
                        onChange={(event) => setEmailCadastro(event.target.value)}
                    />
                </div>

                {/* <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="confirmar-email">Confirmar email (Campo obrigatório)</label>
                    <input className="input_formCadastro" type="email" name="confirmarEmail" id="confirmar-email" placeholder="Obrigatório" required/>
                </div> */}

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="numero-celular">Número de celular (Campo opcional)</label>
                    <input 
                        className="input_formCadastro" 
                        type="tel" name="numeroCelular" 
                        id="numero-celular" 
                        placeholder="Opcional" 
                        value={numeroCelularCadastro}
                        onChange={(event) => setNumeroCelularCadastro(event.target.value)}
                    />
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="senha">Senha (Campo obrigatório)</label>
                    <input 
                        className="input_formCadastro" 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Obrigatório" 
                        required
                        value={senhaCadastro}
                        onChange={(event) => setSenhaCadastro(event.target.value)}
                    />
                </div>

                {/* <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="confirmar-senha">Confirmar senha (Campo obrigatório)</label>
                    <input className="input_formCadastro" type="password" name="confirmarSenha" id="confirmar-senha" placeholder="Obrigatório" required/>
                </div> */}

                <div className="container-botao_formCadastro">
                    <button type='submit' className="botao-finalizar_formCadastro">Finalizar cadastro</button>
                </div>
            </form>

        </div>
    </main>
  </>
  )
}

export default Formulario_Cadastro
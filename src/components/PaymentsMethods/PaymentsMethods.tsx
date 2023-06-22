import styles from './styles.module.scss'

export function PaymentMethods ()  {
    
    return(
        <section className={styles.section}>
            <h1>Old David's: Métodos de Pagamento</h1>
            <hr />
            <h4>Cartão de Crédito</h4>
            <p>Esta forma de pagamento é ilimitada, contudo, devemos lembrar de que o limite aprovado pelo banco emissor será aceito;</p>
            <p>O intervalo de tempo para a liberação dos pagamentos por cartão de crédito pode variar, dependendo da administradora;</p>
            <p>É necessário informar os dados da bandeira do cartão de crédito, como nome, número do cartão, código de segurança (CVV) e validade para a conclusão da compra;</p>
            <p>É obrigatório que o portador do cartão seja o mesmo nome do titular da compra;</p>
            <p>Não nos responsabilizamos por qualquer falha, bloqueio, erro de cálculo, etc. durante o processo de pagamento, por parte da administradora de cartão de crédito.</p>
            <hr />
            <h4>Boleto Bancário</h4>
            <p>O intervalo de tempo para a liberação dos pagamentos por boleto pode variar, dependendo da administradora;</p>
            <p>É necessário informar o CPF do comprador para a conclusão da compra;</p>
            <p>É obrigatório que o titular da compra seja o mesmo nome do titular do CPF informado;</p>
            <p>O boleto deverá ser pago em até 2 dias corridos após a emissão;</p>
            <p>Não nos responsabilizamos por qualquer falha, bloqueio, erro de cálculo, etc. durante o processo de pagamento, por parte da administradora bancária.</p>
            <hr />
            <h4>PayPal</h4>
            <p>Esta forma de pagamento é ilimitada, contudo, devemos lembrar de que o limite aprovado pela conta PayPal será aceito;</p>
            <p>O intervalo de tempo para a liberação dos pagamentos por PayPal é automática, realizando débito no saldo da conta;</p>
            <hr />
            <h4>Pix</h4>
            <p>Ao realizar a transferência PIX, é necessário que o usuário informe o CPF pertencente à conta que fará o envio;</p>
            <p>Na descrição da transferência, para melhor agilidade de recepção, aconselha-se colocar o código do pedido;</p>
            <p>O tipo de transferência não pode ser PIX agendado. Caso o seja, a compra está sujeita a cancelamento;</p>
            <p>A confirmação do pagamento é instantânea. O usuário deve estar ciente de que cancelamento da transferência após confirmação ou expedição do pedido implicará em suspensão do uso da plataforma e em denúncia por irregularidades;</p>
            <hr />
            <h4>Política de descontos</h4>
            <p>Oferecemos cupons de descontos para nossos usuários e assinantes da newsletter. É necessário que o e-mail do usuário esteja cadastrado na assinatura da newsletter para que um desconto seja utilizado;</p>
            <p>Cupons de desconto estão sujeitos a validade e a determinados tipos de produtos diferentes do site;</p>
            <p>Cada cupom possui uso único por usuário;</p>
            <p>Os cupons são enviados via e-mail, salvo em promoções específicas de cunho universal;</p>
            <hr/>
            <h4>Vale Refeição e Vale Alimentação</h4>
            <p>A disponibilidade de cada linha de vouchers está sujeita a alteração;</p>
            <p>Para o uso deste meio de pagamento, é necessário que o mesmo esteja associado a algum aplicativo da provedora;</p>
            <p>Caso contrário, a transação não poderá ser aprovada, e a compra não será aprovada;</p>
            <p>O débito é feito automaticamente sobre o saldo do voucher, sendo um método rápido. Porém, em caso de saldo insuficiente, a compra está sujeita a cancelamento caso não se forneça outro método de pagamento;</p>
            <p>A empresa provedora do benefício tem o direito, de, sob suspeita, solicitar saber o estabelecimento aonde tal compra fora realizada.</p>
            <hr />
        </section>
    )
}
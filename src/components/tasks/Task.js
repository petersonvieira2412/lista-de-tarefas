import React from 'react';
Entendi, vou reformular. Uma campanha publicitária que se conecta diretamente com a geração Y e remete ao surgimento da tecnologia é a campanha "Here's to the Crazy Ones" (Aqui está para os Loucos) da Apple, lançada em 1997.

Esta campanha foi um marco na publicidade de tecnologia e é lembrada como um momento icônico na história da Apple. O comercial foi narrado pelo próprio Steve Jobs e apresentava uma série de pessoas influentes, incluindo Albert Einstein, Martin Luther King Jr. e outros visionários, destacando sua criatividade, inovação e desejo de desafiar o status quo.

A mensagem central da campanha era que aqueles que são loucos o suficiente para pensar que podem mudar o mundo são os que o fazem. Isso ressoou profundamente com a geração Y, que cresceu em uma época de rápida inovação tecnológica e estava ansiosa para desafiar as normas estabelecidas e fazer a diferença no mundo.

Embora essa campanha tenha sido lançada antes de a geração Y ser totalmente adulta, suas mensagens de criatividade, inovação e empreendedorismo continuam a ressoar com essa geração até hoje. Muitos da geração Y se identificam com a ideia de fazer algo significativo e desafiador, aproveitando a tecnologia como uma ferramenta para alcançar seus objetivos.
import './Task.css'

const Task = ({ title, completed }) => {
    return (
        <div className='tasks-container'>
            <h5>{title} - {completed}</h5>
        </div>
    );
};

export default Task;
import styled from "styled-components";

function Vulnerable1(userInput) {
// ok: react-styled-components-injection
  const ArbitraryComponent = styled.div`
    background: url(${userInput});
  `
  return ArbitraryComponent
}

function Vulnerable2(userInput) {
  const input = fooBar(userInput)

// ok: react-styled-components-injection
  return styled.div`
    background: url(${input});
  `
}

function Vulnerable3(nevermind, {userInput}) {
  const input = '#' + userInput;

// ok: react-styled-components-injection
  return styled.div`
    background: ${input};
  `
}

function OkTest({siteUrl, input}) {
// ok: react-styled-components-injection
  const ArbitraryComponent = styled.div`
    background: red;
  `
  return ArbitraryComponent
}

function OkTest(input) {
  const css = 'red';
// ok: react-styled-components-injection
  const ArbitraryComponent = styled.div`
    background: ${css};
  `
  return ArbitraryComponent
}

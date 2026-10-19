import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Mail, XCircle } from 'lucide-react';
import axios from 'axios';

const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:4000/api',withCredentials:true});

export default function VerifyEmail(){
 const [params]=useSearchParams();
 const [state,setState]=useState({status:'loading',message:'Verifying your email…'});
 const requestStarted=useRef(false);
 useEffect(()=>{if(requestStarted.current)return;requestStarted.current=true;const token=params.get('token');if(!token){setState({status:'error',message:'This verification link is missing its token.'});return}api.get('/auth/verify-email',{params:{token}}).then(({data})=>setState({status:'success',message:data.message})).catch(error=>setState({status:'error',message:error.response?.data?.error||'This verification link is invalid or expired.'}))},[params]);
 const verified=state.status==='success';
 return <main className="verify-page"><section className="verify-card"><div className={`verify-icon ${state.status}`}>{verified?<CheckCircle2/>:state.status==='error'?<XCircle/>:<Mail/>}</div><div className="eyebrow"><span className="eyebrow-line"/> AUTO-VEXA ACCOUNT</div><h1>{verified?'Email verified':state.status==='error'?'Verification link expired':'Checking your email'}</h1><p role="status">{state.message}</p>{verified?<Link className="button" to="/login">Continue to sign in <span>→</span></Link>:state.status==='error'?<Link className="button" to="/login">Return to sign in <span>→</span></Link>:<small>This may take a few seconds.</small>}</section></main>
}
